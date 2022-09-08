import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountsItem.module.scss';

const cx = classNames.bind(styles);

function AccountsItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t39.30808-1/274716825_279407190945187_1229663795759042626_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qussLjt8F9gAX_vqzh6&tn=1SgqWBfHHkx1esPy&_nc_ht=scontent.fsgn4-1.fna&oh=00_AT_4o-R7m9OUN2SX43RcMFBvdumFyYSEOoTKaIYv-o9oYg&oe=631F0050"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Lam Truong</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>Truong</span>
            </div>
        </div>
    );
}

export default AccountsItem;
