import {
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .trim()
          .email("Must be valid email.")
          .required("Email is required.")
          .lowercase(),

        password: Yup.string().trim().required("Password is required."),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            minWidth: "300px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5">Sign In</Typography>

          <FormControl>
            <TextField
              label="Email"
              {...formik.getFieldProps("email")}
            ></TextField>
            {formik.touched.email && formik.errors.email ? (
              <FormHelperText error>{formik.errors.email}</FormHelperText>
            ) : null}
          </FormControl>

          <FormControl>
            <TextField
              label="Password"
              {...formik.getFieldProps("password")}
            ></TextField>
            {formik.touched.password && formik.errors.password ? (
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            ) : null}
          </FormControl>

          <Button type="submit" variant="contained" color="info">
            Log In
          </Button>

          <Link to="/register">
            <Typography variant="subtitle2">New here? Register</Typography>
          </Link>
        </form>
      )}
    </Formik>
  );
};

export default Login;
