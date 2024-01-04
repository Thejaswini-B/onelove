import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Pages/Petdoctor.css";

const Petdoctor = () => {
  const [apiError, setApiError] = useState(null);
  const initialValues = {
    name: "",
    mobilenumber: "",
    email: "",
    hospitalname: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name should be at least 3 characters")
      .max(16, "Name should not exceed 16 characters")
      .matches(/^[A-Za-z0-9 ]*$/, "Name should not include special characters")
      .required("Name is required"),
    mobilenumber: Yup.string().matches(
      /^[0-9]{10}$/,
      "Please enter a valid 10 digit phone number"
    ),
    email: Yup.string().email("Invalid email").required("Email is required"),
    hospitalname: Yup.string()
      .min(3, "Hospital name should be at least 3 characters")
      .max(50, "Hospital name should not exceed 50 characters")
      .required("Hospital name is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string().required("Pincode is required"),
    state: Yup.string().required("State is required"),
    country: Yup.string().required("State is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const apiUrl =
      "https://onelove-80825b023778.herokuapp.com/onelove/registration/registration";

    const requestBody = {
      address: values.address,
      city: "Ongole",
      state: values.state,
      zip: values.pincode,
      country: values.country,
      landmark: "Near petrol bunk",
      address_type: "Home",
      mobile_number: values.mobilenumber,
      email: values.email,
      password: "testPassword",
      user_type: "pet_doctor",
      user_name: values.name,
      image_type: "profile",
      image_url: ["https://onelovemysql.s3.amazonaws.com/Dog3.jpeg"],
      clinic_name: values.hospitalname, // Add clinic_name to the request body
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
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          setFieldValue,
        }) => (
          <Form>
            <h1>Login</h1>
            <div>
              <label htmlFor="name">Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Enter your full name"
                required
              />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="mobilenumber">Mobile Number:</label>
              <Field
                type="tel"
                id="mobilenumber"
                name="mobilenumber"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mobilenumber}
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email address"
                required
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="hospitalname">Clinq/Hospital Name:</label>
              <Field
                type="text"
                id="hospitalname"
                name="hospitalname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.hospitalname}
                placeholder="Enter your hospitalname"
              />
              <ErrorMessage
                name="hospitalname"
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
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
            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Petdoctor;
