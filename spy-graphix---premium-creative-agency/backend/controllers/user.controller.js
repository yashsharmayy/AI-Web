import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

// GET ALL USERS - Admin only
export const getUsers = async (req, res) => {
  try {
    const users = await User.find().select(
      "-password -refreshToken -resetPasswordToken",
    );

    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);

    res.status(500).json({
      error: "Failed to fetch users",
    });
  }
};

// CREATE USER - Admin only
export const createUser = async (req, res) => {
  try {
    const { name, email, password, role, avatar } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return res.status(409).json({
        error: "A user with this email already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || "Client",
      avatar,
    });

    const userResponse = user.toObject();

    delete userResponse.password;
    delete userResponse.refreshToken;
    delete userResponse.resetPasswordToken;

    res.status(201).json(userResponse);
  } catch (error) {
    console.error("Create user error:", error);

    res.status(500).json({
      error: error.message || "Failed to create user",
    });
  }
};

// UPDATE USER - Admin only
export const updateUser = async (req, res) => {
  try {
    const { name, email, role, avatar } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email.toLowerCase();
    if (role !== undefined) user.role = role;
    if (avatar !== undefined) user.avatar = avatar;

    await user.save();

    const userResponse = user.toObject();

    delete userResponse.password;
    delete userResponse.refreshToken;
    delete userResponse.resetPasswordToken;

    res.json(userResponse);
  } catch (error) {
    console.error("Update user error:", error);

    res.status(500).json({
      error: error.message || "Failed to update user",
    });
  }
};

// DELETE USER - Admin only
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    // Prevent admin from deleting their own account through admin panel
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        error: "You cannot delete your own account from the admin panel",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete user error:", error);

    res.status(500).json({
      error: "Failed to delete user",
    });
  }
};

// GET CURRENT USER PROFILE
export const getProfile = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select(
      "-password -refreshToken -resetPasswordToken",
    );

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get profile error:", error);

    res.status(500).json({
      error: "Failed to fetch profile",
    });
  }
};

// UPDATE CURRENT USER PROFILE
export const updateProfile = async (req, res) => {
  try {
    const { name, avatar } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (name !== undefined) {
      user.name = name;
    }

    if (avatar !== undefined) {
      user.avatar = avatar;
    }

    await user.save();

    const userResponse = user.toObject();

    delete userResponse.password;
    delete userResponse.refreshToken;
    delete userResponse.resetPasswordToken;

    res.json({
      success: true,
      user: userResponse,
    });
  } catch (error) {
    console.error("Update profile error:", error);

    res.status(500).json({
      error: "Failed to update profile",
    });
  }
};

// CHANGE PASSWORD
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        error: "Current password and new password are required",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        error: "New password must be at least 6 characters long",
      });
    }

    const user = await User.findById(req.user._id).select("+password");

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    const passwordMatches = await user.matchPassword(currentPassword);

    if (!passwordMatches) {
      return res.status(401).json({
        error: "Current password is incorrect",
      });
    }

    user.password = newPassword;

    await user.save();

    res.json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);

    res.status(500).json({
      error: "Failed to change password",
    });
  }
};

// DELETE CURRENT ACCOUNT
export const deleteAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    await User.findByIdAndDelete(req.user._id);

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.json({
      success: true,
      message: "Account permanently deleted",
    });
  } catch (error) {
    console.error("Delete account error:", error);

    res.status(500).json({
      error: "Failed to delete account",
    });
  }
};
