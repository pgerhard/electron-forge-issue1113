const developmentEnvironments = ["development", "test"];

const developmentPlugins = [require("react-hot-loader/babel")];
const productionPlugins = [];  // we're still alpha so aren't doing much performance tuning here.

module.exports = api => {
    // see docs about api at https://babeljs.io/docs/en/config-files#apicache

    const development = api.env(developmentEnvironments);

    return {
        presets: [
            require("@babel/preset-typescript"),
            [
                require("@babel/preset-env"),
                {
                    targets: { electron: require("electron/package.json").version },
                    useBuiltIns: false,
                },
            ],
            [require("@babel/preset-react"), { development }],
        ],
        plugins: [...(development ? developmentPlugins : productionPlugins)],
        sourceType: "unambiguous",
    };
};
