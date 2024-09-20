import { ethers } from "ethers";
import contractABI from '../contractABI.json'; // Add your contract ABI here

const contractAddress = "0xYourContractAddress"; // Add your smart contract address here

function CourseView({ courseId }) {
  const completeCourse = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      try {
        const tx = await contract.completeCourse(courseId); // Call smart contract function
        await tx.wait(); // Wait for transaction confirmation
        alert("Course completed! You've been rewarded.");
      } catch (error) {
        console.log("Error completing course: ", error);
      }
    } else {
      alert("Please connect MetaMask");
    }
  };

  return (
    <div>
      <h2>Course Details</h2>
      <p>Course description goes here...</p>
      <button onClick={completeCourse}>Complete Course</button>
    </div>
  );
}

export default CourseView;
