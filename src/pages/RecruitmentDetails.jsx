import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";

import { recruitmentData } from "../Data/RecruitmentData";
import Banner from "../assets/images/recruitment/recruitmentbanner.png";

// --------------------
// Validation Schema
// --------------------

const countryCodes = [
  { code: "+61", name: "Australia" },
  { code: "+880", name: "Bangladesh" },
  { code: "+49", name: "Germany" },
  { code: "+91", name: "India" },
  { code: "+81", name: "Japan" },
  { code: "+1", name: "USA/Canada" },
  { code: "+44", name: "United Kingdom" },
  { code: "+971", name: "UAE" },
];


const schema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{4,15}$/, "Enter a valid phone number")
    .required("Phone number is required"),
  countryCode: yup
    .string()
    .required("Country code is required"),
  resume: yup
    .mixed()
    .required("Resume is required")
    .test("fileType", "Only PDF files are allowed", (value) => {
      return value && value.type === "application/pdf";
    })
    .test("fileSize", "File size must be less than 2MB", (value) => {
      return value && value.size <= 2 * 1024 * 1024;
    }),
});

const RecruitmentDetails = () => {
  const { id } = useParams();
  const job = recruitmentData.find((item) => item.id === Number(id));

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitting, setSubmitting] = useState(false);

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit = async (data) => {
    try {
      setSubmitting(true);
      const resumeBase64 = await fileToBase64(data.resume);
      const fullPhoneNumber = `${data.countryCode}${data.phone}`;


      await emailjs.send(
        "service_cuopvy9",    
        "template_2fdjh6m",
        {
          fullName: data.fullName,
          email: data.email,
          phone: data.fullPhoneNumber,
          jobTitle: job?.title || "",
          resume_name: data.resume.name,
        },
        "Ls9FVDkMUmTS7lfex"
      );

      alert("Your application has been submitted successfully!");
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!job) {
    return (
      <div className="containerCustom py-10">
        <h2 className="text-center text-red-500"> Job Not Found </h2>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#192030]">
      <div className="relative w-full h-60 md:h-80">
        <img src={Banner} alt="banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h2 className="text-[24px] lg:text-[36px] font-bold text-[#0072B5]">
            {job.title}
          </h2>
        </div>
      </div>

      <div className="containerCustom px-4 py-10">
        <h3 className="text-[20px] lg:text-[30px] font-bold text-[#0072B5] mb-6">
          Job Details
        </h3>
        <p className="textColor text-[15px] mb-6">
          <strong>Department:</strong> {job.department} <br />
          <strong>Location:</strong> {job.location} <br />
          <strong>Job Type:</strong> {job.type} <br />
          <strong>Job Vacancy:</strong> {job.vacancy} <br />
        </p>

        <h4 className="text-[20px] lg:text-[22px] font-bold text-[#0072B5] mt-8">
          Requirements
        </h4>
        <ul className="list-disc pl-6 mt-3 textColor text-[15px]">
          {job.requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>

        <h4 className="text-[20px] lg:text-[22px] font-bold text-[#0072B5] mt-8">
          Responsibilities
        </h4>
        <ul className="list-disc pl-6 mt-3 textColor text-[15px]">
          {job.responsibilities.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>

        {/* ------------------ Application Form ------------------ */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        >
          {/* Full Name */}
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                variant="standard"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                sx={{
                  "& .MuiInputBase-input": { color: "#646a81" },
                  "& .MuiInputLabel-root": { color: "#6b7280" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#2563eb" },
                  "& .MuiInput-underline:before": { borderBottomColor: "#9ca3af" },
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "#2563eb" },
                  "& .MuiInput-underline:after": { borderBottomColor: "#2563eb" },
                }}
              />
            )}
          />

          {/* Email */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email Address"
                type="email"
                variant="standard"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{
                  "& .MuiInputBase-input": { color: "#646a81" },
                  "& .MuiInputLabel-root": { color: "#6b7280" },
                  "& .MuiInputLabel-root.Mui-focused": { color: "#2563eb" },
                  "& .MuiInput-underline:before": { borderBottomColor: "#9ca3af" },
                  "& .MuiInput-underline:hover:before": { borderBottomColor: "#2563eb" },
                  "& .MuiInput-underline:after": { borderBottomColor: "#2563eb" },
                }}
              />
            )}
          />

          {/* Phone Input with Country Code */}
          <div className="lg:col-span-2">
            <label className="block mb-2 textColor">Phone Number</label>
            <div className="grid grid-cols-3 gap-3">
              <Controller
                name="countryCode"
                control={control}
                defaultValue="+880"
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded p-3 borderColor textColor"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.countryCode && (
                <p className="text-red-500 text-sm col-span-3">
                  {errors.countryCode.message}
                </p>
              )}

              {/* Phone Number Input */}
              <Controller
                name="phone"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    placeholder="Phone number"
                    className="col-span-2 border rounded p-3 borderColor textColor"
                  />
                )}
              />
            </div>

            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Resume Upload */}
          <div className="lg:col-span-2">
            <label className="block mb-2 textColor">Upload Resume (PDF)</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setValue("resume", e.target.files[0])}
              className="w-full border rounded p-3 borderColor"
            />
            {errors.resume && (
              <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
            )}
          </div>

          <button
            type="submit"
            className={`btnGradient w-max ${submitting ? "opacity-50 pointer-events-none" : ""}`}
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default RecruitmentDetails;
