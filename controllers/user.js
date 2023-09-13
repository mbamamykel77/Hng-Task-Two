import User from "../Model/user.model.js";
import { userValidator } from "../validator/user.validator.js";
import mongoose from "mongoose";


// create a user
const createUser = async (req, res) => {
  const { error } = userValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }


  const existingUser = await User.findOne({name: req.body.name})
  if(existingUser) {
    return res.status(404).json({
      status: "failed",
      message: "User already exists"
    });
  }


  try {
    const user = new User({
      name: req.body.name,
    })
    await user.save();


    res.status(200).json({
      status: "success",
      message: "User created successfully",
      data: user
    })


  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "failed",
      message: "Internal server error"
    })
  }

};




// fetch a user
const getUser = async (req, res) => {
  try {
    const { name } = req.query;
    const query = name ? { name } : {};
    const people = await User.find(query);

    if (!people || people.length === 0) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "User(s) successfully retrieved",
      data: people,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "internal server error"
    })
  }
}




// update a user
const updateUser = async (req, res) => {

  const { error } = userValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  try {
    const {id} = req.params
    
    // Check if the user ID is not a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: "failed",
        message: "Wrong user ID or Invalid user ID format",
      });
    }

    const { name } = req.body;
    if (name) {
      const existingUser = await User.findOne({ name: req.body.name });

      if (existingUser) {
        return res.status(400).json({
          status: "failed",
          message: "User with this name already exists",
        });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true
    })

    if(!updatedUser) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      })
    }

    if(updatedUser) {
      return res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: updatedUser
      })
    }

  } catch (error) {
    console.log(error);
    res.status(500).json({
    status: 'failed',
    message: "Internal server error",
    })
  }
}





// delete user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "User successfully deleted",
      data: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};



export { createUser, getUser, updateUser, deleteUser };
