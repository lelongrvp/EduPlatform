/* eslint-disable react/prop-types */
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { MdKeyboardArrowRight } from "react-icons/md";
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbs() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      CNTT
    </Link>,
    <Typography key="3" color="white">
      FrontEnd
    </Typography>,
  ];

  return (
    <>
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<MdKeyboardArrowRight fontSize="small" color="white" />}
          aria-label="breadcrumb" color="#c0c4fc"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </>
  );
}