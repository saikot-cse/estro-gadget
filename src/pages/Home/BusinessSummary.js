import { MdRateReview } from 'react-icons/md';
import { FaUserAlt, FaMoneyCheckAlt } from 'react-icons/fa';
import { ImHappy2 } from 'react-icons/im';
export const BusinessSummary = () => {
  return (
    <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
      <div class="stat text-center">
        <div class="stat-title"><FaUserAlt className='text-6xl text-accent block mx-auto mb-1'/></div>
        <div class="stat-value mb-1">1k+</div>
        <div class="stat-desc text-lg">Customers We Served</div>
      </div>

      <div class="stat text-center">
        <div class="stat-title"><FaMoneyCheckAlt className='text-6xl text-accent block mx-auto mb-1'/></div>
        <div class="stat-value mb-1">4200M+</div>
        <div class="stat-desc text-lg">Annual Revenue</div>
      </div>

      <div class="stat text-center">
        <div class="stat-title"><ImHappy2 className='text-6xl text-accent block mx-auto mb-1'/></div>
        <div class="stat-value mb-1">900+</div>
        <div class="stat-desc text-lg">Happy Clients</div>
      </div>
      <div class="stat text-center"> 
        <div class="stat-title"><MdRateReview className='text-6xl text-accent block mx-auto mb-1'/></div>
        <div class="stat-value mb-1">500+</div>
        <div class="stat-desc text-lg">Reviews</div>
      </div>
    </div>
  );
};
