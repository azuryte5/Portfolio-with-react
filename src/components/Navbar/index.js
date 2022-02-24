import React from "react";
import {
  Container,
  chakra,
  HStack,
  Link,
  Flex,
  IconButton,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  VStack,
  Button,
  useColorMode,
  Stack,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

function Nav(props) {
  const {currentSection, handleSectionChange, } = props
  
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  // const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);
  const cl = useColorModeValue("gray.800", "white");
  const mobileNav = useDisclosure();
  const colourModeVal = useColorModeValue("gray.200", "gray.900");
  const colourModeVal2 = useColorModeValue("gray.800", "inherit")

  const MobileNavContent = (
    <VStack
      pos="absolute"
      w="full"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      m={2}
      bg={bg}
      spacing={3}
      rounded="sm"
      shadow="sm"
      zIndex={200}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Container w="full">
          <Link variant="ghost" w="full" type="submit" href={'/colouring'}>
            Andrew Lefebvre
          </Link>
      </Container>
  
        <>
        <Container w="full">
          <form method="get" action="/login">
            <Button variant="ghost" w="full" type="submit">
              Login
            </Button>
          </form>
        </Container>
         
        <Container w="full">
          <form method="get" action="/signup">
            <Button variant="ghost" w="full" type="submit">
              Sign up
            </Button>
          </form>
        </Container>
        </>
  
    </VStack>
  );
  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s"
      bg={"#413C58"}
      borderTop="6px solid"
      borderTopColor="brand.400"
      w="full"
      overflowY="hidden"
      borderBottomWidth={2}
      borderBottomColor={colourModeVal}
    >
      <chakra.div h="4.5rem" mx="auto" maxW="1200px">
        <Flex
          w="full"
          h="full"
          px="100"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex justify="flex-end" align="center" color="gray.400" zIndex={200}>
            <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                <Link
                  bg={"#034F4F"} 
                  href={'https://github.com/azuryte5'}
                  color="#CDEDF6"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="5xl"
                  fontWeight={1000}
                  _hover={{ color: cl }}
                  _focus={{ boxShadow: "none" }}
                >
                  Andrew Lefebvre
                </Link>
                <>
                  <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                      <Button type="submit" onClick={() => handleSectionChange("About")}>
                        About
                      </Button>
                      <Button type="submit" onClick={() => handleSectionChange("Portfolio")}>
                        Portfolio
                      </Button>                  
                      <Button type="submit" onClick={() => handleSectionChange("Resume")}>
                        Resume
                      </Button>
                 </HStack>
                </>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              aria-label={`Switch to ${text} mode`}
              variant="ghost"
              color="current"
              ml={{ base: "0", md: "3" }}
              onClick={toggleMode}
              // icon={<SwitchIcon />}
            />
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={colourModeVal2}
              variant="ghost"
              // icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />
          </Flex>
        </Flex>
        {MobileNavContent}
      </chakra.div>
    </chakra.header>
  );
}

export default  Nav;