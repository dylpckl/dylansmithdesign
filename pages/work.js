import Button from "../components/button"
import Section from "../components/section"
import ProjectCard from "../components/ProjectCard"

function newwork() {
    return (
        <Section
            justify='start'
        >

            <h1 className="mb-16">my stuff</h1>

            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 justify-start">

                {/* 
                <div className='col-span-2 text-black flex rounded-lg hover:drop-shadow-neu-light dark:hover:drop-shadow-neu-dark hover:translate-y-[-0.25rem] transition-all border-8 border-skin-il-stroke-light dark:border-skin-il-stroke-dark'>
                    <div className="bg-sky-300 w-1/2">image here</div>
                    <div className="bg-pink-300 w-1/2 flex flex-col gap-8 p-8">
                        <h3 className="mb-4 text-4xl">project headline</h3>
                        <h5 className="">Aliquip nisi sint nulla ullamco est ea. Esse Lorem est reprehenderit ad aliqua sit sit consectetur laborum. Elit id nostrud proident esse nostrud nostrud esse consequat do ullamco duis minim duis. Aute sunt nisi occaecat proident excepteur irure nulla velit in consectetur excepteur veniam id veniam. Et officia anim officia cillum ut sint occaecat in culpa in sunt fugiat laborum. Consectetur nulla irure nostrud sit ad irure excepteur aute nulla. Eu do fugiat eu labore officia.</h5>
                        <div className="mt-auto flex justify-end gap-8">
                            <Button href=''>
                                link
                            </Button>
                            <Button href=''>
                                case study
                            </Button>
                        </div>
                    </div>
                </div> */}

                <ProjectCard
                    headline='project headline'
                    subtitle='Deserunt deserunt sit laborum mollit eu. Ut labore cupidatat magna minim id elit cillum. Exercitation ex occaecat voluptate sint enim irure adipisicing. Consequat ut consequat proident in. Nulla eiusmod pariatur sint voluptate sint est excepteur culpa labore adipisicing. Irure minim reprehenderit et exercitation fugiat ad et culpa est. Cillum tempor id anim ad velit nulla.'
                    image='https://picsum.photos/1000'
                    featured={true}
                />

                {/* <div className='col-span-1 text-black flex flex-col hover:drop-shadow-neu-light dark:hover:drop-shadow-neu-dark hover:translate-y-[-0.25rem] transition-all'>
                    <div className="bg-sky-300 w-full h-48">image here</div>
                    <div className="bg-pink-300 w-full flex flex-col gap-8 p-8">
                        <h3>project headline</h3>
                        <h5>Sit ullamco laboris elit sint quis dolor nulla in dolor ut ullamco et reprehenderit.</h5>
                        <div className="mt-auto flex justify-end gap-8">
                            <span>action1</span>
                            <span>action2</span>
                        </div>
                    </div>
                </div> */}

                <ProjectCard
                    headline='DrifterBlades'
                    subtitle='test'
                    image='https://picsum.photos/1000'
                    featured={false}
                />
                <ProjectCard
                    headline='project headline'
                    subtitle='Deserunt deserunt sit laborum mollit eu. Ut labore cupidatat magna minim id elit cillum. Exercitation ex occaecat voluptate sint enim irure adipisicing. Consequat ut consequat proident in. Nulla eiusmod pariatur sint voluptate sint est excepteur culpa labore adipisicing. Irure minim reprehenderit et exercitation fugiat ad et culpa est. Cillum tempor id anim ad velit nulla.'
                    image='https://picsum.photos/1000'
                    featured={false}
                />
                <ProjectCard
                    headline='project headline'
                    subtitle='test.'
                    image='https://picsum.photos/1000'
                    featured={false}
                />

            </div>

        </Section>

    )
};

export default newwork