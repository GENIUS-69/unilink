import Event from "../models/event.model.js";

// CREATE EVENT
export const createEvent = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const event = await Event.create({
      title,
      description,
      date,
      createdBy: req.user._id,
      attendees: [req.user._id]
    });

    res.status(201).json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL EVENTS
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate("createdBy", "name")
      .populate("attendees", "name")
      .sort({ date: 1 });

    res.status(200).json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// RSVP EVENT
export const rsvpEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const isGoing = event.attendees.includes(req.user._id);

    isGoing
      ? event.attendees.pull(req.user._id)
      : event.attendees.push(req.user._id);

    await event.save();

    res.status(200).json({
      success: true,
      message: isGoing ? "RSVP cancelled" : "RSVP confirmed"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
