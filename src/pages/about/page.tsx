import Seo from "@/components/Seo";

function AboutPage() {
    return (
        <div>
            <Seo title="About" />
            <h1>Next Movies 2024</h1>
            <p>
                Supported by{" "}
                <a href="https://www.themoviedb.org/">The Movie Database</a>
            </p>
            <p>
                Made by{" "}
                <a href="https://github.com/seungminRyu">seung min ryu</a>
            </p>
        </div>
    );
}

export default AboutPage;
