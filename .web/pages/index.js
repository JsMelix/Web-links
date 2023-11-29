import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import range from "/utils/helpers/range.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "2em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa-Medium", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Sebastian`}
</Text>
  <Text as={`span`} sx={{"color": "#087ec4"}}>
  {` X-e II`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Sebastian X-e II`} size={`xl`} src={`avatar.jpg`} sx={{"color": "#C3C7CB", "bg": "#171F26", "padding": "2px", "border": "4px", "borderColor": "#14A1F0"}}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Sebastian X-e II`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#14A1F0"}}>
  {`@CarpioWeen1`}
</Text>
  <HStack spacing={`1.5em`}>
  <Link as={NextLink} href={`https://github.com/JsMelix`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/github.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://twitter.com/CarpioWeen1`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/x.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://instagram.com/thesebastianxeii`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/instagram.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://tiktok.com/@sebastiangamerxeii`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/tiktok.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://open.spotify.com/show/0m5roRLD2lRCFXc2bBnrdc`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/spotify.svg`} sx={{"width": "1.5em"}}/>
</Link>
  <Link as={NextLink} href={`https://linkedin.com/in/sebastianmelo03/`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`icons/linkedin.svg`} sx={{"width": "1.5em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`05+`}
</Text>
  {` hackatones`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`10+`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`1+`}
</Text>
  {` seguidores`}
</Box>
</Flex>
  <Text sx={{"fontSize": "1em", "color": "#C3C7CB"}}>
  {`
            Soy Desarrollador de Software Educacion Autodidacta
            Construyendo la Web 3, Lenguajes Python e IA, Blockchain.
            Además, creo contenido formativo sobre programación en redes.
            Aquí podrás encontrar todos los enlaces de interés ¡Charlemos!
            `}
</Text>
</VStack>
  <VStack>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Progreso`}
</Heading>
  <Link as={NextLink} href={`https://www.infobae.com/colombia/2023/07/02/mas-de-500-jovenes-colombianos-se-graduaron-en-inteligencia-artificial-y-programacion/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "Hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/infobae.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Programa Jovenes Samsung Innovation Campus`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Python - Alianza con la U Rosario`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://educonrosario.evolutool.com/index.php/6fe238abab086f347e5f52ade5889a36/8c787fa03757e6a235070c267cbd6989?fbclid=IwAR2cY24QYGbR9G2u6aWBgouLZOh4aMrHu9r_Vyu0O1Y_I0324ogbsx9ojzA`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "Hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/2015.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Insignia U Rosario - Samsung `}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Codificacion y Programacion en Python`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://es.linkedin.com/posts/cristianadan_ganador-del-open-ai-chat-gpt-hackathon-activity-7081519456786472960-Prhg?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "Hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/ailab.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`1er puesto al Challenge de educacion - AI Lab`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Hackaton IA`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://twitter.com/PyLatam/status/1695840230417301783`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "Hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#F1F2F4", "backgroundColor": "#171F26", "Hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <Image src={`icons/code.svg`} sx={{"width": "1.5em", "height": "1.5em", "margin": "0.8em"}}/>
  <VStack alignItems={`start`} spacing={`0.5em`} sx={{"paddingY": "0.5em"}}>
  <Text sx={{"fontFamily": "Poppins-Medium", "fontSize": "1em", "color": "#F1F2F4"}}>
  {`Pylatam`}
</Text>
  <Text sx={{"fontSize": "0.8em", "color": "#C3C7CB"}}>
  {`Conferencia Python en Monterrey`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
  <VStack alignItems={`start`} spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading sx={{"width": "100%", "paddingTop": "1em", "fontSize": "1.5em", "color": "#F1F2F4", "fontFamily": "Poppins-Medium"}}>
  {`Hecho con`}
</Heading>
  <HStack spacing={`2em`}>
  <Link as={NextLink} href={`https://reflex.dev`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`reflex.png`} sx={{"height": "4em"}}/>
</Link>
  <Link as={NextLink} href={`https://www.python.org`} isExternal={true} sx={{"textDecoration": "none", "Hover": {}}}>
  <Image src={`python-icon.png`} sx={{"height": "4em"}}/>
</Link>
</HStack>
</VStack>
</VStack>
</Center>
  <VStack spacing={`1em`} sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Image src={`logob1.png`} sx={{"height": "4em"}}/>
  <Link as={NextLink} href={`https://mouredev.com`} isExternal={true} sx={{"fontSize": "0.8em", "textDecoration": "none", "Hover": {}}}>
  <Box>
  {`© 2023-2023 `}
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`Sebastian X-e II`}
</Text>
  {` v3.`}
</Box>
</Link>
  <Text sx={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`BUILDING SOFTWARE WITH ♥ PYTHON.`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Sebastian X-e II | Viaje al Futuro `}
</title>
  <meta content={`Hola, mi nombre es Brais Moure. Soy ingeniero de software, desarrollador freelance full-stack y divulgador.`} name={`description`}/>
  <meta content={`avatar.jpg`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
