import { Typography } from "@mui/material";

export default function NotFound() {
  return (
    <div>
      <Typography variant="t_large_semibold" component="p">
        Page not found
      </Typography>
      <Typography variant="p_large_regular" component="p" mt={1}>
        Could not find requested resource
      </Typography>
    </div>
  );
}
