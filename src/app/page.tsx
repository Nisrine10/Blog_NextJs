import Image from 'next/image';
import image from '../pictures/image.png'; 
import { BlockMath, InlineMath } from 'react-katex';

export default function Home() {
  return (
    <main className="text-center pt-0 px-5">
      <h1 className="pt-32 px-5 text-4xl md:text-5xl font-bold mb-5 text-blue-600">Welcome to Nisrine&apos;s Blog</h1>

      <article className="max-w-[800px] mx-auto text-left leading-8">
        <Image 
          src={image} 
          alt="Neural Networks"
          width={800}
          height={400}
          className="rounded mb-8"
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Understanding Neural Networks: The Backbone of Modern AI</h2>

        <h3 className="text-xl font-semibold text-purple-600 mb-3">Introduction</h3>
        <p>In recent years, neural networks have become the cornerstone of modern artificial intelligence (AI) and machine learning (ML). From powering sophisticated image recognition systems to enabling natural language processing, neural networks have revolutionized the way we interact with technology. In this blog post, we&apos;ll delve into what neural networks are, how they work, and their applications in various fields.</p>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">What is a Neural Network?</h3>
        <p>A neural network is a computational model inspired by the way biological neural networks in the human brain process information. It consists of interconnected nodes, or &quot;neurons,&quot; which work together to recognize patterns and make decisions. Neural networks are designed to learn from data by adjusting the connections between neurons, known as &quot;weights.&quot;</p>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">Structure of a Neural Network</h3>
        <p>A typical neural network consists of three types of layers:</p>
        <ul className="list-disc ml-5">
          <li><strong>Input Layer:</strong> This layer receives the raw data directly. Each neuron in this layer represents a feature or attribute of the data.</li>
          <li><strong>Hidden Layers:</strong> These layers are located between the input and output layers. They perform complex transformations on the input data through a series of mathematical operations. A neural network can have one or more hidden layers, and the term &quot;deep learning&quot; refers to networks with multiple hidden layers.</li>
          <li><strong>Output Layer:</strong> This layer produces the final output of the network, such as a classification label or a numerical value.</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">How Neural Networks Work</h3>
        <p>Neural networks learn through a process called training, which involves the following steps:</p>
        <ol className="list-decimal ml-5">
          <li><strong>Forward Propagation:</strong> The input data is passed through the network, layer by layer. Each neuron performs a weighted sum of its inputs, applies an activation function, and passes the result to the next layer.</li>
          <li><strong>Loss Calculation:</strong> The network&apos;s output is compared to the true labels or values using a loss function, which measures the error or difference between the predicted and actual outcomes. For example, in binary classification, the loss function might be the binary cross-entropy loss:</li>
        </ol>
        
        <div className="mb-4 text-lg">
          <p className="font-bold">Binary Cross-Entropy Loss:</p>
          <BlockMath math={String.raw`L = - \left( y \log(\hat{y}) + (1 - y) \log(1 - \hat{y}) \right)`} />
          <p className="mt-2">where <InlineMath math="y" /> is the true label and <InlineMath math="\hat{y}" /> is the predicted probability.</p>
        </div>

        <ol className="list-decimal ml-5">
          <li><strong>Backpropagation:</strong> The network adjusts the weights of the connections between neurons to minimize the loss. This is done by calculating the gradient of the loss function with respect to each weight and updating the weights in the opposite direction of the gradient. The weight update rule is given by:</li>
        </ol>

        <div className="mb-4 text-lg">
          <p className="font-bold">Weight Update Rule:</p>
          <BlockMath math={String.raw`\Delta w_i = -\eta \frac{\partial L}{\partial w_i}`} />
        </div>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">Activation Functions</h3>
        <p>Activation functions introduce non-linearity into the network, allowing it to learn complex patterns. Common activation functions include:</p>
        <ul className="list-disc ml-5">
          <li><strong>Sigmoid:</strong> Outputs a value between 0 and 1, used for binary classification.</li>
          <li><strong>Tanh:</strong> Outputs a value between -1 and 1, useful for hidden layers.</li>
          <li><strong>ReLU (Rectified Linear Unit):</strong> Outputs the input if it is positive, otherwise outputs zero, commonly used in hidden layers for its simplicity and effectiveness.</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">Applications of Neural Networks</h3>
        <p>Neural networks have a wide range of applications across various industries:</p>
        <ul className="list-disc ml-5">
          <li><strong>Computer Vision:</strong> Used for image recognition, object detection, and facial recognition.</li>
          <li><strong>Natural Language Processing:</strong> Powers applications like language translation, sentiment analysis, and chatbots.</li>
          <li><strong>Healthcare:</strong> Assists in diagnosing diseases, predicting patient outcomes, and personalizing treatment plans.</li>
          <li><strong>Finance:</strong> Used for stock price prediction, fraud detection, and algorithmic trading.</li>
          <li><strong>Autonomous Vehicles:</strong> Enables self-driving cars to recognize and respond to their environment.</li>
        </ul>

        <h3 className="text-xl font-semibold text-purple-600 mb-3 mt-5">Challenges and Future Directions</h3>
        <p>While neural networks have achieved remarkable success, they also face challenges:</p>
        <ul className="list-disc ml-5">
          <li><strong>Data Requirements:</strong> Large amounts of labeled data are needed for training.</li>
          <li><strong>Computational Resources:</strong> Training deep networks requires significant computational power and time.</li>
          <li><strong>Interpretability:</strong> Understanding how neural networks make decisions can be difficult, leading to concerns about transparency and trust.</li>
        </ul>
        <p>Researchers are continually working to address these challenges by developing more efficient algorithms, improving hardware capabilities, and creating methods to better interpret neural network decisions.</p>
      </article>
    </main>
  );
}
