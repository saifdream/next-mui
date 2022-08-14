import * as React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import Footer from '../src/components/Footer';

function ScrollTop(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window ? window() : undefined,
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = (event) => {
	const anchor = (event.target.ownerDocument || document).querySelector(
		'#back-to-top-anchor',
	);

	if (anchor) {
		anchor.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	}
	};

	return (
	<Zoom in={trigger}>
		<Box
			onClick={handleClick}
			role="presentation"
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
		>
			{children}
		</Box>
	</Zoom>
	);
}

ScrollTop.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const pages = ['Home', 'Notice', 'Help', 'About'];

export default function HideAppBar(props) {
  return (
    <>
		<Head>
			<title>
			Home | Next MUI
			</title>
		</Head>
		<HideOnScroll {...props}>
			<AppBar color="default">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{color: '#5048E5'}}>
						Next MUI LOGO
					</Typography>
					<Box ml={4} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								sx={{ color: '#5048E5', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<NextLink
							href="/login"
							passHref
						>
							<Button component="a" sx={{color: '#5048E5'}} >
								Login
							</Button>
						</NextLink>
						<NextLink
							href="/register"
							passHref
						>
							<Button component="a" sx={{color: '#5048E5'}} >
								Register
							</Button>
						</NextLink>
					</Box>
				</Toolbar>
			</AppBar>
		</HideOnScroll>
		<Toolbar id="back-to-top-anchor" />
		<main>
			<Box
				sx={{
					bgcolor: 'background.paper',
					pt: 8,
					pb: 6,
					minHeight: '100vh',
				}}
			>
				<Container maxWidth="sm">
					<Typography
					component="h1"
					variant="h2"
					align="center"
					color="text.primary"
					gutterBottom
					>
					Details layout
					</Typography>
					<Typography variant="h5" align="center" color="text.secondary" paragraph>
					Something short and leading about the collection below—its contents,
					the creator, etc. Make it short and sweet, but not too short so folks
					don&apos;t simply skip over it entirely.
					</Typography>
					<Stack
					sx={{ pt: 4 }}
					direction="row"
					spacing={2}
					justifyContent="center"
					>
					<Button variant="contained">Main call to action</Button>
					<Button variant="outlined">Secondary action</Button>
					</Stack>
				</Container>
			</Box>
			{/* <Container>
				<Box sx={{ my: 2 }}>
				{[...new Array(102)]
					.map(
					() => `Cras mattis consectetur purus sit amet fermentum.
						Cras justo odio, dapibus ac facilisis in, egestas eget quam.
						Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
					)
					.join('\n')}
				</Box>
			</Container> */}
		</main>
		<Footer/>
		<ScrollTop {...props}>
			<Fab color="primary" size="small" aria-label="scroll back to top">
			<KeyboardArrowUpIcon />
			</Fab>
		</ScrollTop>
    </>
  );
}
