let contactMessagesStore = [
  {
    id: "msg-101",
    name: "Sophia Laurent",
    email: "sophia@hautevogue.fr",
    company: "Maison Vogue Mumbai",
    service: "Packaging Design",
    budget: "$5,000 - $10,000",
    message:
      "We are looking for a complete luxury perfume bottle and unboxing box redesign for Autumn 2026.",
    status: "New",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "msg-102",
    name: "David Vance",
    email: "d.vance@apexfintech.com",
    company: "Apex Digital Capital",
    service: "Website & UI",
    budget: "$10,000+",
    message:
      "We need an Awwwards-level 3D WebGL investment portal for our tech fund launch.",
    status: "In Progress",
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
  },
];

export const submitContact = (req, res) => {
  const { name, email, company, service, budget, message } = req.body;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required." });
  }

  const newMessage = {
    id: `msg-${Date.now()}`,
    name,
    email,
    company: company || "",
    service: service || "General Inquiry",
    budget: budget || "Not specified",
    message,
    status: "New",
    createdAt: new Date().toISOString(),
  };

  contactMessagesStore.unshift(newMessage);
  res.status(201).json({
    success: true,
    message:
      "Inquiry submitted successfully! SPY GRAPHIX creative strategists will contact you shortly.",
    data: newMessage,
  });
};

export const getContacts = (req, res) => {
  res.json(contactMessagesStore);
};

export const updateContactStatus = (req, res) => {
  const { status } = req.body;
  const index = contactMessagesStore.findIndex((m) => m.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Message not found" });
  contactMessagesStore[index].status = status;
  res.json(contactMessagesStore[index]);
};

export const deleteContact = (req, res) => {
  contactMessagesStore = contactMessagesStore.filter(
    (m) => m.id !== req.params.id,
  );
  res.json({ success: true, message: "Message deleted" });
};

export const replyContact = async (req, res) => {
  const { replyText } = req.body;
  const messageObj = contactMessagesStore.find((m) => m.id === req.params.id);
  if (!messageObj) return res.status(404).json({ error: "Message not found" });

  messageObj.status = "Replied";
  messageObj.reply = replyText;

  res.json({
    success: true,
    message: `Reply sent successfully to ${messageObj.email}`,
    data: messageObj,
  });
};
