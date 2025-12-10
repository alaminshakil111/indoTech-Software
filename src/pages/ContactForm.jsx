import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

// import from local
import TermsContent from "../Data/TermsContent";

// Validation Schema
const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  company: yup.string().required("Company Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^(\+8801|01)[0-9]{9}$/, "Enter a valid Bangladeshi phone number")
    .required("Phone number is required"),
  message: yup.string().required("Message is required"),
});

const nextData = {
  stepsTitle: "What happens next?",
  steps: [
    "Once we’ve received and processed your request, we’ll get back to you to detail your project needs and sign an NDA to ensure confidentiality.",
    "After examining your wants, needs, and expectations, our team will devise a project proposal with the scope of work, team size, time, and cost estimates.",
    "We’ll arrange a meeting with you to discuss the offer and nail down the details.",
    "Finally, we’ll sign a contract and start working on your project right away.",
  ],
};

const ContactForm = () => {
  
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Modal & Agree logic
  const [openModal, setOpenModal] = useState(false);
  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  const handleAgree = () => {
    setAgree(true);
    setOpenModal(false);
    setAgreeError(false);
  };

  const onSubmit = async (data) => {
    if (!agree) {
      setAgreeError(true);
      return;
    }

    emailjs
      .send(
        "service_cuopvy9",
        "template_2fdjh6m",
        {
          fullName: data.fullName,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "Ls9FVDkMUmTS7lfex"
      )
      .then(
        (response) => {
          alert("Your message has been sent successfully!");
          reset();
          setAgree(false);
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

const formFields = [
  { name: "fullName", label: "Full Name", type: "text", textColor: "#000000" },
  { name: "company", label: "Company Name", type: "text", textColor: "#333333" },
  { name: "email", label: "Email Address", type: "email", textColor: "#000000" },
  { name: "phone", label: "Phone Number", type: "text", textColor: "#000000" },
  { name: "message", label: "Message", type: "textarea", textColor: "#000000" },
];


  return (
    <div className="dark:bg-[#192030]">
      <div className="containerCustom px-4 py-10 lg:py-[75px]">
        <div className="grid md:grid-cols-2 md:gap-[50px] lg:gap-[90px]">
          {/* Left Section */}
          <div>
            <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5] mb-3">
              Contact Us
            </h2>
            <p className="textColor text-[15px]">
              <a
                href="tel:+880123456789"
                className="border-b border-[#FF5650] text-[#FF5650] hover:text-[#e14b47] transition-colors pr-1"
              >
                Book a call
              </a>{" "}
              or fill out the form below and we’ll get back to you once we’ve processed your request.
            </p>

            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "100%" } }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              className="textColor gap-5 mt-5 md:mt-9 grid grid-cols-1 lg:grid-cols-2"
            >
              {formFields.map((field) => (
                <div
                  key={field.name}
                  className={`${field.type === "textarea" ? "lg:col-span-2" : ""} fdfdf `}
                >
                  <Controller
                    name={field.name}
                    control={control}
                    render={({ field: controllerField }) =>
                      field.type === "textarea" ? (
                        <TextField
                          {...controllerField}
                          label={field.label}
                          variant="standard"
                          multiline
                          error={!!errors[field.name]}
                          helperText={errors[field.name]?.message}
                          className= "w-full textColor "
                          
                        />
                      ) : (
                        <TextField
                          {...controllerField}
                          label={field.label}
                          variant="standard"
                          type={field.type}
                          error={!!errors[field.name]}
                          helperText={errors[field.name]?.message}
                          className= "w-full textColor "
                        />
                      )
                    }
                  />
                </div>
              ))}

              {/* Terms and Conditions */}
              <div className="lg:col-span-2 mt-3">
                <label className="flex items-start gap-2 cursor-pointer textColor">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setOpenModal(true)}
                  />
                  <span>
                    I agree to the{" "}
                    <span
                      className="text-[#FF5650] underline cursor-pointer"
                      onClick={() => setOpenModal(true)}
                    >
                      Terms & Conditions
                    </span>
                  </span>
                </label>

                {agreeError && (
                  <p className="text-red-500 text-sm mt-1">
                    You must agree to the Terms & Conditions before submitting.
                  </p>
                )}
              </div>

              <button
                type="submit"
                className={`btnBorder ${!agree ? "border-red-500" : ""}`}>
                Submit
              </button>

            </Box>
          </div>

          {/* Right Section */}
          <div>
            <div className="relative w-full xl:max-w-[70%] bg-[#f4f4f4] dark:bg-[#646a81] border border-[#AEB1B7] p-5 lg:p-8 rounded-[15px] mt-5 xl:mt-[140px] xl:ml-auto">
              <div className="-z-[1] absolute top-5 -left-5 w-full h-full border border-dashed border-[#FF5650] dark:border-[#FF5650] rounded-[15px]"></div>
              <h3 className="text-3xl font-semibold mb-10">{nextData.stepsTitle}</h3>

              <div className="space-y-8 textColor">
                {nextData.steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <span className="w-8 h-8 p-4 border rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                    <p className="text-[15px]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Terms Modal */}
       <Modal
          open={openModal}
          onClose={(event, reason) => {
            if (reason === "backdropClick" || reason === "escapeKeyDown") {
              return;
            }
            setOpenModal(false);
          }}
          disableEscapeKeyDown
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              maxWidth: 500,
              maxHeight: "80vh",
              bgcolor: "background.paper",
              borderRadius: "10px",
              boxShadow: 24,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div className="p-4 border-b">
              <h2 className="text-2xl font-bold">Terms & Conditions</h2>
            </div>

            {/* Scrollable Content */}
            <div className="p-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
              <TermsContent />
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t flex justify-end gap-3">
              <Button variant="outlined" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleAgree}>
                I Agree
              </Button>
            </div>
          </Box>
        </Modal>


      </div>
    </div>
  );
};

export default ContactForm;
