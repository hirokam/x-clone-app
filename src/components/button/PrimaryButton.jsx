import { Button } from "@mui/material";

export const PrimaryButton = (props) => {
  const { children, style } = props;
  return (
    <>
      <Button
        variant="outlined"
        className="sidebar__button"
        sx={{
          fontWeight: "800",
          fontSize: "1rem",
          background: "var(--x-color)",
          color: "white",
          borderRadius: "9999px",
          border: "none",
          outlineFocus: "none",
          ":hover": {
            background: "var(--x-color)",
            opacity: "0.8",
            border: "none",
          },
          ...style,
        }}
      >
        {children}
      </Button>
    </>
  );
};
