import React from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Paper,
} from "@mui/material";
import Grid from '@mui/material/Grid2';

  

const AssetSummaryPanel = ({ 
//   onAssetChange, 
//   onNetworkChange 
}: {
//   walletData: { [key: string]: { balance: string, usdValue: string } };
//   onAssetChange: (asset: string) => void;
//   onNetworkChange: (network: string) => void;
}) => {
    // const [selectedAsset, setSelectedAsset] = useState("ETH");
    // const [selectedNetwork, setSelectedNetwork] = useState("Ethereum");

//   const handleAssetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedAsset(event.target.value);
//     onAssetChange(event.target.value); // Call parent function to update data
//   };

//   const handleNetworkChange = (event) => {
//     setSelectedNetwork(event.target.value);
//     onNetworkChange(event.target.value); // Call parent function to update data
//   };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "1rem",
        marginBottom: "2rem",
        backgroundColor: "#1C1C1C",
        color: "#fff",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Asset Selection and Summary
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" border="1px solid #fff" padding="1rem">
        <Grid container  direction="column" gap="1rem">
            {/* Asset Dropdown */}
            <FormControl style={{ minWidth: 150 }}>
              <InputLabel style={{ color: "#fff" }}>Select Asset</InputLabel>
              <Select
                // value={selectedAsset}
                value=""
                // onChange={handleAssetChange}
                style={{ color: "#fff", backgroundColor: "#2C2C2C" }}
              >
                <MenuItem value="ETH">ETH</MenuItem>
                <MenuItem value="USDT">USDT</MenuItem>
                <MenuItem value="DAI">DAI</MenuItem>
              </Select>
            </FormControl>
            
            
             {/* Network Dropdown */}
             <FormControl style={{ minWidth: 150 }}>
              <InputLabel style={{ color: "#fff" }}>Select Network</InputLabel>
              <Select
                // value={selectedNetwork}
                value=""
                // onChange={handleNetworkChange}
                style={{ color: "#fff", backgroundColor: "#2C2C2C" }}
              >
                <MenuItem value="Ethereum">Ethereum</MenuItem>
                <MenuItem value="BSC">BSC</MenuItem>
                <MenuItem value="Polygon">Polygon</MenuItem>
              </Select>
            </FormControl>
        </Grid>




        {/* Balance Display */}
        <Box>
          <Typography variant="body1">
            {/* Balance: {walletData[selectedAsset]?.balance || "0"} {selectedAsset} */}
            Balance: 2.0 ETH
          </Typography>
          <Typography variant="body2">
            {/* USD Value: ${walletData[selectedAsset]?.usdValue || "0"} */}
            Value: $3600
          </Typography>
        </Box>

       
      </Box>
    </Paper>
  );
};

export default AssetSummaryPanel;
