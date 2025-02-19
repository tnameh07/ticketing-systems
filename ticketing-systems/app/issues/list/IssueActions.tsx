import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import IssueStatusFilter from './IssueStatusFilter'

const IssueActions = () => {
  return (
    <Flex className='md-5' justify={"between"}> 
      <IssueStatusFilter />
    <Button><Link href={'/issues/new'}>
      new issue</Link> </Button>
  </Flex>
  )
}

export default IssueActions
