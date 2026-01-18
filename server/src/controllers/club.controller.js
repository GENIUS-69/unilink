import Club from "../models/club.model.js";

// CREATE CLUB
export const createClub = async (req, res) => {
  try {
    const { name, description } = req.body;

    const club = await Club.create({
      name,
      description,
      createdBy: req.user._id,
      members: [req.user._id]
    });

    res.status(201).json({ success: true, club });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL CLUBS
export const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find()
      .populate("createdBy", "name email")
      .populate("members", "name");

    res.status(200).json({ success: true, clubs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// JOIN / LEAVE CLUB
export const toggleClubMembership = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);

    if (!club) {
      return res.status(404).json({ success: false, message: "Club not found" });
    }

    const isMember = club.members.includes(req.user._id);

    isMember
      ? club.members.pull(req.user._id)
      : club.members.push(req.user._id);

    await club.save();

    res.status(200).json({
      success: true,
      message: isMember ? "Left club" : "Joined club"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
