

---

### 🔹 Basic Schema with Validation

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"], // custom error message
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name must be less than 50 characters"]
  },
  email: {
    type: String,
    required: true,
    unique: true, // index-based uniqueness
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"]
  },
  age: {
    type: Number,
    min: [18, "Must be at least 18 years old"],
    max: [65, "Age must be below 65"]
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"], // only allowed values
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

---

### 🔹 Custom Validation Function

```js
const productSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    validate: {
      validator: function (v) {
        return v > 0; // only positive numbers
      },
      message: props => `${props.value} is not a valid price!`
    }
  }
});

const Product = mongoose.model("Product", productSchema);
```

---

### 🔹 Async Validation (useful for DB checks)

```js
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    validate: {
      validator: async function (value) {
        // Example: check if orderId already exists
        const count = await mongoose.models.Order.countDocuments({ orderId: value });
        return count === 0;
      },
      message: "Order ID already exists!"
    }
  }
});

const Order = mongoose.model("Order", orderSchema);
```

---

### 🔹 Running Validations

* **On Save / Create**

```js
const user = new User({ name: "Ki", email: "invalidEmail", age: 17 });
user.save().catch(err => console.log(err.message));
```

* **On Update (must enable `runValidators`)**

```js
await User.updateOne({ _id: id }, { age: 17 }, { runValidators: true });
```

---

