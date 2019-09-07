export default {
    up: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.addColumn('Users', 'title', {
                    type: Sequelize.STRING
                }, { transaction: t }),
                queryInterface.addColumn('Users', 'avatar', {
                    type: Sequelize.STRING,
                }, { transaction: t })
            ])
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.sequelize.transaction((t) => {
            return Promise.all([
                queryInterface.removeColumn('Users', 'title', { transaction: t }),
                queryInterface.removeColumn('Users', 'avatar', { transaction: t })
            ])
        })
    }
}
