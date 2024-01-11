import { Container, Typography, styled } from "@mui/material";

export const AuthContainer = styled(Container)(({theme}) => ({
    width: theme.breakpoints.values.sm,
    marginTop: "20px",
}));

export const LogoDescription = styled(Typography)({
    color: "rgba(255, 255, 255, 0.6)",
})

export const LinkText = styled(Typography)({
    marginTop: "20px",
    textAlign: "center",
    cursor: "pointer"
})