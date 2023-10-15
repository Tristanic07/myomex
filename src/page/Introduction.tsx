export default function Introduction() {
  const whiteText = "text-white"; // Define a CSS class for white text

  return (
    <div className="py-10" id="information">
      <h1 className={`text-center text-5xl font-mono font-bold ${whiteText}`}>
        INTRODUCTION TO THE SYSTEM
      </h1>
      <div className="flex gap-10 py-10 px-20">
        <div className="w-1/2">
          <p className={whiteText}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to our
            empowering platform dedicated to women's health. We recognize that
            many women may unknowingly experience the symptoms of uterine
            myomas, a condition that can have an impact on their overall
            well-being. Our mission is to bring attention to this frequently
            overlooked issue and equip you with the knowledge and tools to
            proactively manage your health.
          </p>
          <br />
          <p className={whiteText}>
            Our platform goes beyond being a mere information resource; it's
            your companion on your journey to well-being. We've carefully
            designed it with your specific needs in mind, ensuring that it's
            user-friendly and accessible, so you can easily comprehend and
            assess your condition. We firmly believe that knowledge is
            empowerment, and we're committed to providing every woman with the
            power to make informed decisions about her health.
          </p>
          <br />
          <p className={whiteText}>
            Join us on this path to Empowerment. Together, we can raise
            awareness about Uterine Myomas and assist women worldwide in taking
            control of their health. Your Health is invaluable, and we're here
            to offer unwavering support every step of the way."
          </p>
          <br />
          <p className={whiteText}>
            By using our system, you're not just identifying potential health
            concerns; you're taking a proactive step toward a healthier future.
            Join us in making women's health a priority. Together, we can
            empower women to live their lives to the fullest, armed with
            knowledge and confidence.
          </p>
        </div>
        <div className="w-1/2">
          <h1 className={`text-2xl font-mono font-bold ${whiteText}`}>
            IMPORTANCE OF THE SYSTEM TO THE USERS
          </h1>
          <p className={whiteText}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our System
            isn't just about recognizing symptoms; it's about transforming
            lives. Here's why our system is crucial for women everywhere:
          </p>
          <br />
          <p className={whiteText}>
            1. <b className={whiteText}>Early Detection Saves Lives:</b> Uterine
            myomas, if left untreated, can lead to complications. By identifying
            symptoms early, our system empowers women to seek timely medical
            attention, potentially preventing further health issues.
          </p>
          <br />
          <p className={whiteText}>
            2. <b className={whiteText}>Empowerment Through Knowledge:</b>{" "}
            Knowledge is the first step to taking control of your health. Our
            system educates women about uterine myomas, fostering awareness and
            informed decision-making.
          </p>
          <br />
          <p className={whiteText}>
            3. <b className={whiteText}>Accessible Healthcare:</b> We break down
            barriers to healthcare access. Whether you're in a remote area or
            simply seeking discreet advice, our system is available 24/7,
            offering immediate support.
          </p>
          <br />
          <p className={whiteText}>
            4. <b className={whiteText}>Reduced Anxiety:</b> Waiting for a
            doctor's appointment can be anxiety-inducing. Our system provides
            quick, reliable insights, reducing the stress associated with
            uncertainty.
          </p>
          <br />
          <p className={whiteText}>
            5. <b className={whiteText}>Privacy and Comfort:</b> Discussing
            personal health issues can be uncomfortable. Our platform allows
            women to explore their symptoms privately, offering a safe space for
            self-assessment.
          </p>
          <br />
          <p className={whiteText}>
            6. <b className={whiteText}>Community and Support:</b> We're more
            than a diagnostic tool; we're a community of women supporting each
            other. Share experiences, find comfort in knowing you're not alone,
            and access resources for further assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
