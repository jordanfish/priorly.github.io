import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import BellIcon from '../icons/Bell'

const IssueEmptyState = () => (
  <div className={css(styles.container)}>
    <BellIcon styles={styles.icon} />
    <h1>No post yet.</h1>
    <h2>Be the first to add one!</h2>
  </div>
)

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    color: '#ddd',
    padding: '30px'
  },

  icon: {
    width: '20%',
    minWidth: '80px',
    fill: '#dadada'
  }
})

export default IssueEmptyState