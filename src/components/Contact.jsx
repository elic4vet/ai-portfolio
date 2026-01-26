const Contact = () => {
    return (
        <div id="contact" className="px-6 py-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="text-white-400">
                Feel free to reach out if you'd like to collaborate or just say hello!
            </p>
            <div className="mt-8">
                <a href="mailto:elisabeth.erkekoglou@gmail.com"
                    className="px-8 py-4 bg-rose-500 text-white font-semibold rounded-xl hover:bg-rose-600 transition-all duration-300 ">
                    Send Email
                </a>
            </div>
        </div>
    )
}

export default Contact