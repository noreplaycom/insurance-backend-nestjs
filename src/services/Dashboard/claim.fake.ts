import { Claim } from 'src/@generated';
import { fakeClaimComplete } from '../../../prisma/fake-data';

const count = 500;
const dataFakeClaim: Claim[]= []
for (let i = 0; i < count; i++) {
  dataFakeClaim.push(fakeClaimComplete())
}

export { dataFakeClaim }