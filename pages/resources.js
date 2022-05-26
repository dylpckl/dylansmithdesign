import { motion } from "framer-motion";
import Section from "../components/section";

function resources() {

    const container = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }

    const child = {
        visible: { opacity: 1, y: 0 },
        // visible: { opacity: 1, x: 0, y: 0 },
        hidden: { opacity: 0, y: 10 },
        // transition: { duration: 5 },
        // hidden: { opacity: 0, x: -100, y: 10 },
        // initial={{ y: 10, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
    }

    return (
        <Section>

            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                transition={{ duration: 0.8 }}
                className={`flex flex-col justify-center gap-8`}
            // className={`flex flex-col justify-center gap-8 ${darkMode && 'dark'}`}
            >

                <motion.div
                    variants={child}
                >
                    <h1>resources</h1>
                    <p>i've spent alot of time compiling resources for my own uses and am happy to share my findings here</p>
                    <p>jump to: design | freelancing | 3</p>
                </motion.div>


                <motion.div
                    variants={child}
                    className='flex flex-col rounded-md overflow-hidden bg-pink-300'
                >
                    <h2 className="text-3xl p-2">design</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={child}
                    className='flex flex-col rounded-md overflow-hidden bg-pink-300'
                >
                    <h2 className="text-3xl p-2">freelancing</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={child}
                    className='flex flex-col rounded-md overflow-hidden bg-pink-300'
                >
                    <h2 className="text-3xl p-2">design</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-1/4 bg-blue-300">
                                image
                            </div>
                            <div className="flex flex-col p-2 w-3/4 bg-green-300">
                                <div className="">
                                    bonsai
                                </div>
                                <div className="">
                                    desc
                                </div>
                                <div className="">
                                    actions
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </motion.div>

        </Section>
    )
}

export default resources