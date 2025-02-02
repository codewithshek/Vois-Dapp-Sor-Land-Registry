# Smart Contract Land Registry: Automating Property Registration 

A blockchain-based decentralized application (DApp) for transparent and secure land registration, ownership transfer, and verification using Ethereum smart contracts.

# preview
![image](https://github.com/user-attachments/assets/6c405f97-aad7-44a3-a01a-1560051ebc17)


## 🚀 Features
- **Register Property**: Owners can register land with details like ID, location, and area.
- **List Properties for Sale**: Owners can mark properties available for purchase.
- **Buy Property**: Buyers can purchase land securely using cryptocurrency.
- **View Ownership Records**: Publicly verify land ownership and transaction history.

## 🛠 Tech Stack
### **Frontend**
- HTML, CSS (Bootstrap), JavaScript
- Web3.js (Ethereum interaction)
- MetaMask Integration

### **Backend & Smart Contract**
- Solidity (Ethereum-based smart contract)
- Truffle & Ganache (Development & Testing)
- IPFS (For document storage)

## 📂 Directory Structure
```
vois-dapp-for-land-registry/
├── truffle-config.js
├── contracts/
│   ├── LandRegistry.sol
│   └── .gitkeep
├── migrations/
│   ├── 2_deploy_contracts.js
│   └── .gitkeep
└── test/
    ├── front.html
    └── .gitkeep
```

## 📌 Setup & Installation
### **1. Clone the Repository**
```sh
git clone https://github.com/codewithshek/vois-dapp-for-land-registry.git
cd vois-dapp-for-land-registry
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Run Ganache for Local Blockchain**
```sh
ganache-cli
```

### **4. Deploy Smart Contract**
```sh
truffle migrate --network development
```

### **5. Run Frontend**
Simply open `test/front.html` in your browser after setting up MetaMask with your local blockchain.

## 📜 Smart Contract Functions
- `registerLand(uint256 _id, string _location, uint256 _area)`: Registers a new land property.
- `transferOwnership(uint256 _id, address _newOwner)`: Transfers property to a new owner.
- `getLand(uint256 _id)`: Fetches land details including ID, location, area, and owner.

## 💡 Future Enhancements
- Implement **property listing for sale**.
- Support for **multiple blockchain networks**.
- **Smart contract verification on Etherscan**.

## 🤝 Contributing
Feel free to fork and submit pull requests. Any contributions are welcome!

Made with ❤️ by CodeWithShek

