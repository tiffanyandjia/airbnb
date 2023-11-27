"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
//import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
//import {toast} from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import useRegisterModal from "@/app/hooks/useRegisterModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  return <div></div>;
};

export default RegisterModal;
