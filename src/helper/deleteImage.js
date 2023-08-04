const fs = require("fs").promises;

const deleteImage = async (userImagePath) => {
  try {
    await fs.access(userImagePath);
    await fs.unlink(userImagePath);
    console.log("User images is deleted.");
  } catch (error) {
    console.error("User image does not exist");
  }
};

module.exports = { deleteImage };
