import CodeBlock from "../models/codeBlockModel.js";

export const getAllCodeBlocks = async (req, res) => {
    try {
        const blockCodesList = await CodeBlock.find();
        res.status(200).send({ data: blockCodesList });
    } catch (error) {
        res.status(400).send({
            status: "Failed",
            error: error.message
        });
    }
};

export const getCodeBlockById = async (req, res) => {
    if (req.params.id === null || req.params.id === undefined) {
        res.status(400).send({
            status: "Failed",
            error: error.message
        });
    }

    try {
        const codeBlock = await CodeBlock.findOne({ id: req.params.id });
        res.status(200).send({ data: codeBlock });
    } catch (error) {
        res.status(400).send({
            status: "Failed",
            error: error.message
        });
    }
};

// export { getAllCodeBlocks, getCodeBlockById };
