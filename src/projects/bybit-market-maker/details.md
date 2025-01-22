# Bybit Market Maker

## Project Description
The **Bybit Market Maker** is a proof-of-concept strategy that demonstrates the use of the **Bybit v5 API** with a **Node.js websocket server** and a **React** front-end for real-time market monitoring. The project is structured into two main components:

### Components:
1. **Server**:
   - Connects to Bybit's public and private websocket streams.
   - Tracks the current market state and executes market-making strategies.
   - Operates independently, managing market state and strategy execution.
   - Broadcasts updates to the front-end every 100ms.

2. **Client**:
   - Built with **Create React App (CRA)**.
   - Provides a user-friendly interface for monitoring live data and interacting with the market-making strategy.
   - Includes a 'Start' button to initiate market-making actions.

### Development Highlights:
- **Real-Time Updates**: The system provides real-time market data updates and allows users to control strategies interactively.
- **Overcoming IP Blocking**: Addressed IP blocking by Bybit during development using a **Google Cloud Run** instance with a static outbound IP for testing.
- **Robust Architecture**: Ensures a clear separation of concerns, with the back-end server handling strategy logic and the front-end focusing on user interaction.

### Planned Enhancements:
- Preloading open orders and fills for improved usability.
- Moving configuration values into environment variables for better manageability.
- Expanding support for additional instrument categories, such as options and linear contracts.

---

## Key Features:
- **Real-Time Monitoring**: Provides live updates on market state and strategy execution.
- **Interactive Control**: Users can initiate market-making actions through an intuitive UI.
- **Scalability**: Designed with modular components to facilitate future expansions.

### Challenges:
- Overcame IP restrictions imposed by Bybit during development by deploying the server on **Google Cloud Run**.

The Bybit Market Maker serves as a foundational project to demonstrate market-making strategies, offering opportunities for future enhancements and scalability.
