import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";

const ItemListContainer = () => {
  return (
    <Box sx={{flexGrow: 1, display: "flex", justifyContent: "center"}}>
      <Card sx={{ maxWidth: 500, m: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                FORD EXPLORER 2023
               <img src="https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/explorer/2023/collections/3-2/23_frd_epr_kr_icsl_ps34_356x180.png/_jcr_content/renditions/cq5dam.web.1280.1280.png" alt="" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
            V6 Twin-Turbo EcoBoost de 400 Caballos de Fuerza y 415 lb-pie de Torque que hace de Ford Explorer ST 2023 la más potente de su categoría.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 500, m: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                FORD RAPTOR 2023
                <img src="https://es.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/f-150f-150/2023/collections/3_2/22_frd_f150_scrw_5_5ft_rptr_801a_cdor_356x180.png" alt="" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
            La Pickup Ford Lobo Raptor 2023 está equipada con Motor 3.5L Twin-Turbo EcoBoost® de Alto Desempeño con 450HP y 510 lb-pie de Torque, con el que podrás superar cualquier camino.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 500, m: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                FORD ESCAPE 2023
                <img src="https://es.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/escape/2024/collections/3_2/23_frd_esp_stln_slt_oxwh_ps34_356x180.png/jcr:content/renditions/cq5dam.web.1280.1280.png"alt=""/>
            </Typography>

            <Typography variant="body2" color="text.secondary">
            Ford Escape Híbrida 2022 entrega una potencia combinada de 198HP gracias a su motor de 2.5L de Ciclo Atkinson y un Motor Eléctrico de 1.1 kWh que, con su eficiente transmisión eCVT, ofrece una potencia y desempeño sobresaliente en su categoría.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ItemListContainer;