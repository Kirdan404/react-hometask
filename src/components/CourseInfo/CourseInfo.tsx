import Button from "../../common/Button/Button";

export default function CourseInfo() {
    return (
        <>
            <div className="containerInfo">
                <h1>JavaScript</h1>
                <div className="courseInfo">
                    <section className="courseInfo__description">
                        <h3>Description:</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially u
                            nchanged.
                        </p>
                    </section>
                    <aside className="courseInfo__meta">
                        <dl>
                            <div>
                                <dt>ID:</dt>
                                <dd>231j3-b34g5-b345m</dd>
                            </div>
                            <div>
                                <dt>Duration:</dt>
                                <dd><strong>23:35</strong> hours</dd>
                            </div>
                            <div>
                                <dt>Created:</dt>
                                <dd>01.01.2023</dd>
                            </div>
                            <div>
                                <dt>Authors:</dt>
                                <dd>Anna Sidorenko, Valentina Larina</dd>
                            </div>
                        </dl>
                    </aside>
                </div>
                <div className="backButtonCourseInfo">
                    <Button buttonText="BACK" onClick={() => alert("back")} />
                </div>
            </div>
        </>
    );
}