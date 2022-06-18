// next libraries
import { useRouter } from "next/router";

// react libraries
import { FC } from "react";

// components
import { Grid, Card, Row, Text } from "@nextui-org/react";

// models
import { PokemonListResult } from "../../models";


export const PokemonCard: FC<PokemonListResult> = ({ id, img, name }) => {

  const router = useRouter();

  const showPokemonDetail = (name:string) => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card hoverable clickable key={id} onClick={()=>showPokemonDetail(name)}>
        <Card.Body css={{ p: 16 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
