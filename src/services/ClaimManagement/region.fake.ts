import { Region } from 'src/@generated';
import { fakeRegionComplete } from '../../../prisma/fake-data';

const count = 150;
const dataFakeRegion: Region[]= []
for (let i = 0; i < count; i++) {
  dataFakeRegion.push(fakeRegionComplete())
}

export { dataFakeRegion }