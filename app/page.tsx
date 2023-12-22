export default function Home() {
  return (
    <main className="main_home">
      <div className="container">
        {/* banner */}
        <div className="banner section_padding">
          <div className="grid grid-cols-12 lg:gap-8">
            <div className="col-span-6">
              <div className="banner_heading">
                <h1 className="text-5xl font-bold text-white mb-8">
                  Hey, I'm Lorem!
                </h1>
                <p className="text-xl font-medium text-lightGray mb-6">
                  Welcome to my digital garden. 🌱
                </p>
                <p className="text-xl font-medium text-lightGray">
                  I'm a frontend developer in Dhaka, Bangladesh. I complete over
                  100 plus front-end development. I like 🏸badminton, 🚲bike
                  riding, 🍳 cooking, 📖reading, and 🕹gaming.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* banner /-end */}
      </div>
    </main>
  );
}
