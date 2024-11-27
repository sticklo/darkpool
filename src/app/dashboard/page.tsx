'use client'
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Table, TableBody, TableCell, TableHead, TableRow, Modal, Box } from "@mui/material";
import AssetSummaryPanel from "../ui/dashboard/summary-panel";

const Dashboard = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleConnectWallet = () => {
    // Mock wallet connection logic
    setWalletConnected(true);
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const mockYieldData = [
    { protocol: "Aave", apy: "7%", chain: "Ethereum" },
    { protocol: "PancakeSwap", apy: "10%", chain: "BSC" },
  ];

  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      <AppBar position="static" style={{ backgroundColor: "#1C1C1C" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            DarkPool
          </Typography>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Network
          </Typography>
          <Button  variant="contained" color="success" onClick={handleConnectWallet}>
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "2rem" }}>
        {/* <Box>
            <Typography variant="h5" gutterBottom>
              Your Portfolio
            </Typography>
            <Paper style={{ padding: "1rem", marginBottom: "2rem", backgroundColor: "#fff" }}>
              <Typography variant="body1">
                {walletConnected ? "2 ETH ($3600), 1000 USDT ($1000)" : "Connect your wallet to see your portfolio."}
              </Typography>
            </Paper>
        </Box> */}

        <AssetSummaryPanel />
        <Typography variant="h5" gutterBottom>
          Yield Opportunities
        </Typography>
        <Table style={{ backgroundColor: "#1C1C1C" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#fff" }}>Protocol</TableCell>
              <TableCell style={{ color: "#fff" }}>APY</TableCell>
              <TableCell style={{ color: "#fff" }}>Blockchain</TableCell>
              <TableCell style={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockYieldData.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ color: "#fff" }}>{row.protocol}</TableCell>
                <TableCell style={{ color: "#fff" }}>{row.apy}</TableCell>
                <TableCell style={{ color: "#fff" }}>{row.chain}</TableCell>
                <TableCell>
                  <Button variant="contained" color="success" onClick={handleOpenModal}>
                    Invest
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "#1C1C1C",
            color: "#fff",
            boxShadow: 24,
            p: 4,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Invest in Protocol
          </Typography>
          <Typography variant="body1" gutterBottom>
            Enter the amount you want to invest in Aave.
          </Typography>
          <Button variant="contained" color="primary" fullWidth onClick={handleCloseModal}>
            Confirm Investment
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
