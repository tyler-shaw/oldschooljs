import LootTable from '../../../structures/LootTable';
import SimpleMonster from '../../../structures/SimpleMonster';
import RareDropTable, { GemTable } from '../../subtables/RareDropTable';

const SteelDragonTable = new LootTable(128)
	.every('Dragon bones')
	.every('Steel bar', 5)

	/*Weapons and armour */
	.addItem('Rune dart(p)', 12, 7)
	.addItem('Rune mace', 1, 4)
	.addItem('Rune knife', 7, 3)
	.addItem('Adamant kiteshield', 1, 2)
	.addItem('Rune axe', 1, 2)
	.addItem('Rune full helm', 1, 1)
	.oneIn(512, 'Dragon plateskirt')
	.oneIn(512, 'Dragon platelegs')

	/* Runes and ammunition */
	.addItem('Rune javelin', 7, 20)
	.addItem('Blood rune', 20, 19)
	.addItem('Runite bolts', [2, 12], 6)
	.addItem('Soul rune', 5, 5)

	/* Coins */
	.addItem('Coins', 470, 17)

	/* Other */
	.addItem('Super attack(3)', 1, 13)
	.addItem('Runite limbs', 1, 8)
	.addItem('Dragon javelin heads', 12, 5)
	.addItem('Runite bar', 1, 3)
	.addItem('Super defence(2)', 1, 3)
	.addItem('Curry', 1, 1)
	.addItem('Curry', 2, 1)

	/* Rdt */
	.add(RareDropTable, 1, 4)
	.add(GemTable, 1, 4)

	/* Tertiary */
	.tertiary(64, 'Clue scroll (hard)')
	.tertiary(500, 'Clue scroll (elite)')
	.tertiary(10_000, 'Draconic visage');

export default new SimpleMonster({
	id: 139,
	name: 'Steel Dragon',
	table: SteelDragonTable,
	aliases: ['steel dragon']
});
