import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import Select from 'react-select';
import { Multiselect } from "multiselect-react-dropdown";
import * as Yup from "yup";
import "../Pages/Petcare.css";

const options = [
  { value: "pet_walking", label: "Pet Walking" },
  { value: "pet_sitting", label: "Pet Sitting" },
  { value: "pet_boarding", label: "Pet Boarding" },
  { value: "event_training", label: "Event Training" },
  { value: "training_workshop", label: "Training Workshop" },
  { value: "adoption_drives", label: "Adoption Drives" },
  { value: "pet_intelligence_rank_card", label: "Pet Intelligence Rank Card" },
  { value: "pet_grooming", label: "Pet Grooming" },
];

const Petcare = () => {
  const [apiError, setApiError] = useState(null);
  const initialValues = {
    name: "",
    mobilenumber: "",
    email: "",
    yearsOfExperience: "",
    address: "",
    pincode: "",
    state: "",
    country: "",
    pet_walking: false,
    pet_sitting: false,
    pet_boarding: false,
    event_training: false,
    training_workshop: false,
    adoption_drives: false,
    pet_intelligence_rank_card: false,
    pet_grooming: false,
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
    yearsOfExperience: Yup.number()
      .min(0, "Years of experience should be greater than or equal to 0")
      .max(50, "Years of experience should not exceed 50")
      .required("Years of experience is required"),
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
      trainer_experience: values.yearsOfExperience,
      mobile_number: values.mobilenumber,
      email: values.email,
      user_type: "pet_trainer",
      user_name: values.name,
      image_type: "profile",
      image_url: [values.Image],
      address_type: "Work",
      pet_walking: isChecked("pet_walking", values.services),
      pet_sitting: isChecked("pet_sitting", values.services),
      pet_boarding: isChecked("pet_boarding", values.services),
      event_training: isChecked("event_training", values.services),
      training_workshop: isChecked("training_workshop", values.services),
      adoption_drives: isChecked("adoption_drives", values.services),
      pet_intelligence_rank_card: isChecked(
        "pet_intelligence_rank_card",
        values.services
      ),
      pet_grooming: isChecked("pet_grooming", values.services),
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
  //   setFieldValue("services", selectedValues);
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
                id="mobilenunmber"
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
              <label htmlFor="yearsOfExperience">Years of Experience:</label>
              <Field
                type="yearsOfExperience"
                id="yearsOfExperience"
                name="yearsOfExperience"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yearsOfExperience}
                placeholder="Enter your experience in years"
                required
              />
              <ErrorMessage
                name="yearsOfExperience"
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
            <Field name="services">
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
                  }}
                  onRemove={(selectedList) => {
                    const selectedValues = selectedList.map(
                      (item) => item.value
                    );
                    form.setFieldValue(field.name, selectedValues);
                  }}
                  placeholder="Select services"
                  showCheckbox
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

export default Petcare;
