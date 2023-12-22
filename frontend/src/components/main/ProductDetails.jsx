import { AddShoppingCartOutlined } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';


const ProductDetails = () => {
  return (
    <Box sx={{display:"flex" ,alignItems:"center", gap:2.5 , flexDirection:{xs:"column" ,sm :"row"}}}>
      
     <Box sx={{display:"flex"}}>
     <img width={300} src="src/images/1.jpg" alt="" />
      </Box> 
      <Box sx={{textAlign:{xs:"center" ,sm:"left"}}} >
      <Typography variant='h5'  >WOMEN FASHION</Typography>
    <  Typography my={0.4} fontSize={"22px"} color={"crimson"}>$12.99</Typography>
      <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
      <Stack sx={{justifyContent: {xs :"center" ,sm:"left"}}} direction={"row"} gap={1} my={2}>
{["src/images/1.jpg","src/images/2.jpg"].map((item) => {
  return(
    <img   style={{ borderRadius: 3 }}
    height={100}
    width={90} key={item} src={item} alt="" />

  );
})}
      </Stack>
      <Button
    
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >

<AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
    </Box>
    </Box>
  );
}

export default ProductDetails;
