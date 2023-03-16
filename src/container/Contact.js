import React from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import { SectionTitle } from "./styles/About.styled";
import {
  ContactContent,
  ContactImage,
  StyledContact,
  StyledForm,
} from "./styles/Contact.styled";
import { Container } from "./styles/Container.styled";
import { images } from "../constants";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <StyledContact id="contact">
      <Container>
        <SectionTitle style={{ color: "#fff", top: "50px" }}>
          Contact Me
        </SectionTitle>
        <ContactContent>
          <ContactImage>
            <img src={images.contact} alt="contact-photo" />
          </ContactImage>

          <StyledForm>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/1a1a1e319568f7d1ccb6e8e08be1e31e "
              method="POST"
            >
              <span>I'm Nyore, Say Hello!</span>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />

              {errors.name && (
                <p>
                  {errors.name.type === "required" && "This field is required."}
                </p>
              )}

              <input
                type="text"
                placeholder="Your email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p>
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                type="text"
                placeholder="Your Message"
                rows="4"
                cols="50"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p>
                  {errors.message.type === "required" &&
                    "This field is required."}
                </p>
              )}

              <button type="submit">
                <FaPaperPlane />
              </button>
            </form>
          </StyledForm>
        </ContactContent>
      </Container>
    </StyledContact>
  );
};

export default Contact;
