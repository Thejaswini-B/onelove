import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Multiselect } from "multiselect-react-dropdown";
import * as Yup from "yup";
import "../Pages/Petshop.css";
import { FaAngleDown } from "react-icons/fa"; // Import the arrow icon from react-icons/fa

const options = [
  { value: "food_treats", label: "Food Treats" },
  { value: "accessories", label: "Accessories" },
  { value: "toys", label: "Toys" },
  { value: "health_care", label: "Health Care" },
];

const Petshop = () => {
  const [apiError, setApiError] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const initialValues = {
    name: "",
    mobilenumber: "",
    email: "",
    bussinessname: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
    food_treats: false,
    accessories: false,
    toys: false,
    health_care: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .max(50, "Name should not exceed 50 characters")
      .required("Name is required"),
    mobilenumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Please enter a valid 10 digit phone number")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    bussinessname: Yup.string()
      .min(3, "Business name should be at least 3 characters")
      .max(50, "Business name should not exceed 50 characters")
      .required("Business name is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string()
      .matches(/^\d{6}$/, "Please enter a valid 6 digit pincode")
      .required("Pincode is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("Country is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://onelove-80825b023778.herokuapp.com/onelove/registration/registration";

    const requestBody = {
      address: values.address,
      city: values.city,
      state: values.state,
      zip: values.pincode,
      country: values.country,
      mobile_number: values.mobilenumber,
      email: values.email,
      user_type: "pet_store",
      user_name: values.name,
      image_type: "profile",
      image_url: [values.Image],
      address_type: "Work",
      store_name: values.bussinessname,
      food_treats: isChecked("food_treats", values.products),
      accessories: isChecked("accessories", values.products),
      toys: isChecked("toys", values.products),
      health_care: isChecked("health_care", values.products),
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      // Handle successful registration (e.g., show a success message)
    } catch (error) {
      console.error("Error during registration:", error.message);
      // Handle registration error (e.g., show an error message)
    } finally {
      setSubmitting(false);
    }
  };

  const fetchPincodeData = async (pincode, setFieldValue) => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pincode}`
      );
      const data = await response.json();

      if (
        response.ok &&
        data &&
        data.length > 0 &&
        data[0].Status === "Success"
      ) {
        const { PostOffice } = data[0];
        if (PostOffice && PostOffice.length > 0) {
          const { Country, State, Block } = PostOffice[0];
          setFieldValue("city", Block);
          setFieldValue("state", State);
          setFieldValue("country", Country);
          setApiError(null);
        }
      } else {
        setApiError(data?.Message || "Error fetching data");
      }
    } catch (error) {
      console.error("Error fetching pincode data:", error);
      setApiError("Failed to fetch data");
    }
  };

  const isChecked = (fieldName, selectedValues) => {
    return selectedValues && selectedValues.includes(fieldName);
  };

  // const handleSelection = (selectedList, setFieldValue, values) => {
  //   const selectedValues = selectedList
  //     ? selectedList.map((item) => item.key)
  //     : [];
  //   setFieldValue("products", selectedValues);
  // };

  return (
    <div className="login">
      {apiError && <div className="api-error">{apiError}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Set the validation schema here
        validateOnChange // Trigger validation on change
        validateOnBlur // Trigger validation on blur
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            <h1>Login</h1>
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="mobilenumber">Mobile Number:</label>
              <Field
                type="tel"
                id="mobilenunmber"
                name="mobilenumber"
                placeholder="Enter your mobile number"
                required
              />
              <ErrorMessage
                name="mobilenumber"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="bussinessname">Business Name:</label>
              <Field
                type="bussinessname"
                id="bussinessname"
                name="bussinessname"
                placeholder="Enter your bussiness name"
                required
              />
              <ErrorMessage
                name="bussinessname"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
              />
              <ErrorMessage name="address" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="pincode">Pincode</label>
              <Field
                type="text"
                id="pincode"
                name="pincode"
                placeholder="Enter your pincode"
                onChange={(e) => {
                  setFieldValue("pincode", e.target.value);
                  fetchPincodeData(e.target.value, setFieldValue);
                }}
              />
              <ErrorMessage name="pincode" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="state">State:</label>
              <Field type="text" id="state" name="state" disabled />
              <ErrorMessage name="state" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="city">Country:</label>
              <Field type="text" id="country" name="country" disabled />
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            <Field name="products">
              {({ field, form }) => (
                <Multiselect
                  options={options}
                  displayValue="label"
                  selectedValues={(field.value || []).map((key) =>
                    options.find((opt) => opt.value === key)
                  )}
                  onSelect={(selectedList) => {
                    const selectedValues = selectedList.map(
                      (item) => item.value
                    );
                    form.setFieldValue(field.name, selectedValues);
                    setIsDropdownOpen(false);
                  }}
                  onRemove={(selectedList) => {
                    const selectedValues = selectedList.map(
                      (item) => item.value
                    );
                    form.setFieldValue(field.name, selectedValues);
                    setIsDropdownOpen(false);
                  }}
                  placeholder="Select products"
                  showCheckbox
                  customArrow={<FaAngleDown className="custom-arrow" />}
                  onToggle={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle the dropdown open/close state
                  open={isDropdownOpen}
                />
              )}
            </Field>

            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Petshop;
