import { Box, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FaAppleAlt, FaCarrot, FaLemon, FaPepperHot } from "react-icons/fa";

const Index = () => {
  const fruits = [
    {
      name: "Apples",
      description: "Crisp and sweet, perfect for snacks and pies.",
      icon: <FaAppleAlt size="3em" color="red" />,
      image: "https://images.unsplash.com/photo-1576179635662-9d1983e97e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcHBsZXN8ZW58MHx8fHwxNzEzNzk2NTY4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Oranges",
      description: "Juicy and rich in vitamin C, great for juices.",
      icon: <FaLemon size="3em" color="orange" />,
      image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvcmFuZ2VzfGVufDB8fHx8MTcxMzc5NjU2OHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Carrots",
      description: "Crunchy and healthy, ideal for salads and stews.",
      icon: <FaCarrot size="3em" color="orange" />,
      image: "https://images.unsplash.com/photo-1522184216316-3c25379f9760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJyb3RzfGVufDB8fHx8MTcxMzc5NjU2OHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      name: "Chilies",
      description: "Spicy and flavorful, enhances any dish.",
      icon: <FaPepperHot size="3em" color="red" />,
      image: "https://images.unsplash.com/photo-1583027475794-4c02423a979c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsaWVzfGVufDB8fHx8MTcxMzc5NjU2OXww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  return (
    <Box p={5}>
      <Heading mb={4} textAlign="center">
        Welcome to the Fruit Shop
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {fruits.map((fruit) => (
          <VStack key={fruit.name} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} align="center">
            <fruit.icon />
            <Image src={fruit.image} boxSize="150px" objectFit="cover" alt={fruit.name} />
            <Heading size="md">{fruit.name}</Heading>
            <Text>{fruit.description}</Text>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
