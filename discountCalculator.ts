const discount = (senior: boolean, vet: boolean, member: boolean) => {
    if (senior && vet && member) return 0.25;
    if ((senior && member) || (vet && member)) return 0.15;
    if (senior || member || vet) return 0.10
 }

 console.log(discount(true, true, true));