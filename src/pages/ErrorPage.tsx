import NavBar from "@/components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading size={"4xl"}>Oops</Heading>
        <Text>
          {" "}
          {isRouteErrorResponse(error)
            ? "This page does not exist "
            : "Sorry an unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
