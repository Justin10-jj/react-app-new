export default function Projects() {
  const projects = [
    { title: "BOOKNLOVE ", description: "The BookNLove project aims to build an inclusive platform connecting readers, writers, and publishers through personalized content, secure publishing, and interactive features like audiobooks and flipbook reading. It promotes creativity and protects originality with advanced plagiarism detection. " },
    { title: "CREDIT CARD FRAUD DETECTION ", description: "It is vital that credit card companies are able to identify fraudulent credit card transactions so that customers are not charged for items that they did not purchase. This project intends to illustrate the modelling of a data set using machine learning with Credit Card Fraud Detection. " },
  ];

  return (
    <section id="projects" className="p-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="border rounded-lg p-4 bg-white shadow">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
