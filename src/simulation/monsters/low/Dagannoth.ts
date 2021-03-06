import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareSeedTable from '../../subtables/RareSeedTable';
import { GemTable } from '../../subtables/RareDropTable';

const DagannothTable = new LootTable()
	.every('Bones')

	/*Weapons*/
	.addItem('Iron spear', 1, 6)
	.addItem('Bronze spear', 1, 5)
	.addItem('Mithril spear', 1, 1)

	/* Runes and ammunition */
	.addItem('Water rune', 15, 4)
	.addItem('Steel arrow', 15, 2)
	.addItem('Mithril javelin', 3, 1)

	/* Seeds */
	.add(RareSeedTable, 1, 18)

	/* Fishing */
	.addItem('Lobster pot', 1, 12)
	.addItem('Raw herring', 3, 4)
	.addItem('Raw sardine', 5, 4)
	.addItem('Harpoon', 1, 3)
	.addItem('Feather', 15, 2)
	.addItem('Fishing bait', 50, 2)
	.addItem('Raw lobster', 1, 2)
	.addItem('Raw tuna', 1, 2)
	.addItem('Seaweed', 10, 2)
	.addItem('Oyster pearls', 1, 1)
	.addItem('Oyster pearls', 2, 1)

	/* Coins */
	.add('Coins', 56, 29)
	.add('Coins', 25, 9)
	.add('Coins', 44, 8)
	.add('Coins', 41, 6)

	/* Other */
	.addItem('Opal bolt tips', 12, 2)
	.addItem('Casket', 1, 1)

	/* Rdt */
	.add(GemTable, 1, 1)

	/* Tertiary */
	.tertiary(40, 'Ensouled dagannoth head')
	.tertiary(128, 'Clue scroll (medium)');

export default new SimpleMonster({
	id: 140,
	name: 'Dagannoth',
	table: DagannothTable,
	aliases: ['dagannoth']
});
