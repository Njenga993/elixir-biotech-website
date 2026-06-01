import { useState, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Loader } from "lucide-react";
import "./ContactForm.css";

const EMAILJS_SERVICE_ID = "service_42fmd89";
const EMAILJS_TEMPLATE_ID = "template_kyuoh7h";
const EMAILJS_PUBLIC_KEY = "ghs4g982senlssREE";

interface FormData {
  name: string;
  email: string;
  subject: string;
  department: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

const DEPARTMENTS = [
  { value: "", label: "Select Department" },
  { value: "Partnerships & Distribution", label: "Partnerships & Distribution" },
  { value: "Innovation & R&D", label: "Innovation & R&D" },
  { value: "Press & Media", label: "Press & Media" },
  { value: "General Support", label: "General Support" },
  { value: "Other", label: "Other" },
];

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    department: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === "error") {
      setStatus({ type: null, message: "" });
    }
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) {
      return "Please enter your full name.";
    }
    if (formData.name.trim().length < 2) {
      return "Name must be at least 2 characters long.";
    }
    if (!formData.email.trim()) {
      return "Please enter your email address.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (!formData.department) {
      return "Please select a department.";
    }
    if (!formData.subject.trim()) {
      return "Please enter a subject.";
    }
    if (formData.subject.trim().length < 3) {
      return "Subject must be at least 3 characters long.";
    }
    if (!formData.message.trim()) {
      return "Please enter your message.";
    }
    if (formData.message.trim().length < 10) {
      return "Message must be at least 10 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setStatus({
        type: "error",
        message: validationError,
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const templateParams = {
        from_name: formData.name.trim(),
        reply_to: formData.email.trim(),
        subject: formData.subject.trim(),
        department: formData.department,
        message: formData.message.trim(),
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully. We'll get back to you within 1-2 business days.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        department: "",
        message: "",
      });
      
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      let errorMessage = "Oops! Something went wrong. ";
      
      if (error instanceof EmailJSResponseStatus) {
        switch (error.status) {
          case 400:
            errorMessage += "Invalid request. Please check your EmailJS configuration.";
            break;
          case 401:
            errorMessage += "Authentication failed. Please verify your EmailJS API keys.";
            break;
          case 403:
            errorMessage += "Access denied. Check your EmailJS account permissions.";
            break;
          case 404:
            errorMessage += "Service or template not found. Verify your EmailJS IDs are correct.";
            break;
          case 412:
            errorMessage += "Message rejected. Please try again or email us directly at info@elixirbiotech.co.ke";
            break;
          case 422:
            errorMessage += "Invalid template parameters. Check your template variables.";
            break;
          case 429:
            errorMessage += "Too many requests. Please wait a moment and try again.";
            break;
          case 500:
          case 502:
          case 503:
            errorMessage += "Server error. Please try again in a few minutes.";
            break;
          default:
            errorMessage += `Unexpected error. Please email us directly at info@elixirbiotech.co.ke`;
        }
      } else if (error instanceof Error) {
        if (error.message.includes("NetworkError") || error.message.includes("Failed to fetch")) {
          errorMessage += "Network connection failed. Please check your internet connection.";
        } else {
          errorMessage += "Please try again or email us directly at info@elixirbiotech.co.ke";
        }
      } else {
        errorMessage += "Please try again or contact us directly at info@elixirbiotech.co.ke";
      }
      
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <div className="form-header">
        <div className="info-panel-badge">
          <span className="badge-dot badge-dot-sm" aria-hidden="true" />
          Send Message
        </div>
        <h3 className="form-title">Get in Touch</h3>
        <p className="form-description">
          Fill out the form below and we'll respond within 1-2 business days.
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="form-input"
            disabled={isSubmitting}
            autoComplete="name"
            minLength={2}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="form-input"
            disabled={isSubmitting}
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department <span className="required">*</span>
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            className="form-input form-select"
            disabled={isSubmitting}
          >
            {DEPARTMENTS.map((dept) => (
              <option key={dept.value} value={dept.value}>
                {dept.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="subject" className="form-label">
            Subject <span className="required">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="How can we help you?"
            className="form-input"
            disabled={isSubmitting}
            minLength={3}
          />
        </div>

        <div className="form-group form-group-full">
          <label htmlFor="message" className="form-label">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your inquiry..."
            className="form-input form-textarea"
            disabled={isSubmitting}
            minLength={10}
          />
        </div>

        <div className="form-group form-group-full">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader size={18} className="spinner" />
                Sending...
              </>
            ) : (
              <>
                <Send size={18} />
                Send Message
              </>
            )}
          </button>
        </div>

        {status.type && (
          <div
            className={`form-status ${
              status.type === "success" ? "status-success" : "status-error"
            }`}
            role="alert"
          >
            {status.type === "success" ? (
              <CheckCircle size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            <span style={{ whiteSpace: "pre-line" }}>{status.message}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;